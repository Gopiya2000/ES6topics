var promise = new Promise(function(resolve, reject) {
    const a = 15;

    if(a === 10) {
        resolve();
    } else {
        reject();
    }
    });
    
    promise.then(function () {
            console.log('Success.');
        }).
        catch(function () {
            console.log('Error.');
        });