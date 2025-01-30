        // Mark the start of the operation
        performance.mark('startLoad');

        // Simulate an operation (e.g., data fetching or rendering)
        setTimeout(() => {
            // Mark the end of the operation
            performance.mark('endLoad');

            // Measure the time between marks
            performance.measure('loadTime', 'startLoad', 'endLoad');

            // Retrieve and log the measurement
            const measure = performance.getEntriesByName('loadTime')[0];
            console.log(`Load time: ${measure.duration}ms`);

            // Display the result on the page
            document.body.insertAdjacentHTML('beforeend', `<p>Load time: ${measure.duration}ms</p>`);
        }, 2000); // Simulate a 2-second operation