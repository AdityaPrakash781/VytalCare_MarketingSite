try {
    console.log('Attempting import of server/index.ts');
    const result = await import('./server/index.ts');
    console.log('Success!', result);
} catch (error) {
    console.error('FULL ERROR:', error);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    process.exit(1);
}
