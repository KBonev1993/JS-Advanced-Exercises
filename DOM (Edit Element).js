function edit(element,match, replacer){
            const text = element.textContent;
            const pattern = new RegExp(match, 'g')
            const result = text.split(pattern).join(replacer);
            element.textContent = result;
        }
