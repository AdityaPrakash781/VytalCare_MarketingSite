// =====================================================
// API Request Helper with Auth Support
// =====================================================
// Used by admin dashboard to make authenticated requests
// =====================================================

const API_BASE_URL = "";

export interface RequestOptions {
    headers?: Record<string, string>;
    requiresAuth?: boolean;
}

export async function apiRequest(
    method: string,
    path: string,
    body?: any,
    options?: RequestOptions
): Promise<Response> {
    const headers: Record<string, string> = {
        "Content-Type": "application/json",
        ...options?.headers,
    };

    // Add auth header for admin requests
    if (options?.requiresAuth) {
        const password = localStorage.getItem("admin_password");
        if (password) {
            headers["Authorization"] = `Bearer ${password}`;
        }
    }

    const response = await fetch(`${API_BASE_URL}${path}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.error || error.message || "Request failed");
    }

    return response;
}
