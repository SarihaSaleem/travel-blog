function Blog() {
    return (
        <section className="blog-section py-10 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="text-xl font-semibold mb-2">Exploring the Alps</h3>
                        <p className="text-gray-700">Discover the breathtaking beauty of the Alps and the best hiking trails.</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="text-xl font-semibold mb-2">A Weekend in Paris</h3>
                        <p className="text-gray-700">Experience the charm of Paris with our guide to the top attractions and eateries.</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="text-xl font-semibold mb-2">Beach Getaways</h3>
                        <p className="text-gray-700">Find out the best beach destinations for a relaxing vacation.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}Blog() 
export default Blog;
