// Simple test to check if imports work
try {
    console.log('Testing imports...');
    const schema = await import('./shared/schema.ts');
    console.log('Schema imported successfully');
    const storage = await import('./server/storage.ts');
    console.log('Storage imported successfully');
    const supabase = await import('./server/supabase-admin.ts');
    console.log('Supabase admin imported successfully');
} catch (error) {
    console.error('Import error:', error);
    process.exit(1);
}
