import React from 'react'
import './Blogs.css'
const Blogs = () => {
  return (
    <div id="blogs">
        <div className="container">
        <h1 className="pt-3 text-danger text-center">All Question Answer</h1>
        <div className='blogs'>
            <div className='blog'>
                <h1>1) Difference between javascript and nodejs?</h1>
                <p><h4 className='text-danger'>Answer: </h4><h4 className='text-warning'>Javasrcipt:</h4>
                <h6>1)  	JavaScript is a programming language. It is running in any web browser with a proper browser engine.</h6>
                <h6>2) Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.</h6>
                <h6>3) JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).</h6>
                
                <h4 className='text-warning'>Node JS:</h4>
                <h6>1) It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.</h6>
                <h6>2) It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.</h6>
                <h6>3) Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.</h6>
                </p>
            </div>
            <div className='blog'>
                <h1>2)When should you use nodejs and when should you use mongodb?</h1>
                <p><h4 className='text-danger'>Answer: <h4 className='text-warning'>I should use Node JS:</h4></h4>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.</p><br/>
                <h4 className='text-warning'>I should use MongoDB:</h4><p>js receives a CPU bound task: Whenever a heavy request comes to the event loop, Node. js would set all the CPU available to process it first, and then answer other requests queued. That results in slow processing and overall delay in the event loop, which is why Node. js is not recommended for heavy computation.In these situation i use mongodb.
                </p>
            </div>
            <div className='blog'>
                <h1>3) Differences between sql and nosql databases?</h1>
                <p><h4 className='text-danger'>Answer: </h4><h4 className='text-warning'>Difference between SQL and NoSQL:</h4>
                <h6>1) SQL databases are relational, NoSQL databases are non-relational.</h6>
                <h6>2) SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</h6>
                <h6>3) SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</h6>
                <h6>4) SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</h6>
                <h6>5) SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</h6>
                </p>
            </div>
            <div className='blog'>
                <h1>3) What is the purpose of jwt and how does it work?</h1>
                <p><h4 className='text-danger'>Answer: </h4><h4 className='text-warning'>JWT:</h4>
                JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                <h4 className='text-warning'>Its work:</h4>
                <h6>
                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</h6>
                
                <h6>The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.</h6>

                <h6>There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.</h6> 

                <h6>The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. </h6>
                </p>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Blogs