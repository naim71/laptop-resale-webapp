import React from 'react';

const Blog = () => {
    return (
        <section className="p-4 lg:p-8 bg-primary text-gray-800">
            <p className='text-3xl font-bold mb-10 text-center text-[#45409C]'>Question & Answers</p>

            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="https://wallpaperaccess.com/full/3949076.jpg" alt="" className="h-80 bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                        <h3 className="text-3xl font-bold">What are the different ways to manage a state in a React application?</h3>
                        <p className="my-6 text-gray-600">There are five different ways to manage a state in a react application. These are: <span>
                            <li>Logical State</li>
                            <li>Server State</li>
                            <li>Form State</li>
                            <li>Navigation State</li>
                            <li>Browser State</li>
                        </span>
                        </p>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <img src="https://dmitripavlutin.com/javascript-prototypal-inheritance/cover.png" alt="" className="h-80 bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                        <h3 className="text-3xl font-bold">How does prototypical inheritance work?</h3>
                        <p className="my-6 text-gray-600">Javascript has a feature called prototypal inheritance that allows you to add methods and properties to objects. It is a technique that allows an item to take on the attributes and operations of another object. Traditionally, we utilize Object. getPrototypeOf and Object to obtain and modify an object's [[Prototype]].</p>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200514113957/What-is-Unit-Testing-and-Why-Developer-Should-Learn-It.png" alt="" className="h-80 bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                        <h3 className="text-3xl font-bold">What is a unit test? Why should we write unit tests?</h3>
                        <p className="my-6 text-gray-600">A unit test is a technique for evaluating a unit, which is the smallest segment of code that can be logically isolated in a system. Unit testing's primary goal is to separate written code for testing to see if it functions as intended. Unit testing is a crucial stage in the development process because, when done properly, it can aid in finding early code issues that could be more challenging to identify in subsequent testing phases.</p>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <img src="https://plainenglish.io/assets/post-content/angular-vs-react-vs-vue-js-which-is-the-best-choice-for-2022.png" alt="" className="max-h-fit bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                        <h3 className="text-3xl font-bold">React vs. Angular vs. Vue?
                        </h3>
                        <p className="my-6 text-gray-600">Angular is a complete front-end framework, React is a UI library, and Vue.js is a progressive framework.
                            Although they can be used to create front-end apps practically interchangeably, they aren't exactly the same, therefore it makes sense to compare them and comprehend their variations.
                            Each framework is based on components and enables the quick development of UI features.
                            They all differ in terms of structure and architecture, though.
                            The development of Angular, React, and Vue is all highly busy. They maintain the current versions while regularly releasing new ones. You can utilize any of these frameworks with confidence because they all have a good degree of support right now.
                            It’s important to note that Angular is not growing as fast as before, while Vue — even though it started more recently — seems to be growing a lot. As previously stated, we can’t predict which frameworks will remain relevant in the long term, but each project has a great community behind it and is constantly evolving.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;