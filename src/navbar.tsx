import * as React from 'react';

export interface IAppProps {
}

export default class Navbar extends React.Component<IAppProps> {
  public render() {
    return (
        <nav className="bg-myblue bg-opacity-70 p-4">
        <div className="max-w-7xl mx-auto px-4 font-anton">
          <div className="flex justify-between items-center">
            <a href="/" className="text-white hover:text-gray-200">
              <div className="text-white text-xl">Health App</div>
            </a>
            <div className="flex space-x-4">
              <a href="/profile" className="text-white hover:text-gray-200">
                Profile 
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                Logout
              </a>              
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
