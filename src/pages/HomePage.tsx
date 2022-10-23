import React from 'react';
import OrangeLink from '../components/OrangeLink';


function HomePage() {
  return (
    <div className="App">
        <p>
            <OrangeLink to="employees-list">Employee-List</OrangeLink>
        </p>
</div>
  );
}

export default HomePage;
