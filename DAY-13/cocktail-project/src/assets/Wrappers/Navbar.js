import styled from "styled-components";

  const Wrapper = styled.nav`
      background-color : var(--white);
       .nav-center{
         width : var()(--view-width);
         margin : 0 auto;
         display : flex;
         flex-direction : column; 
         padding : 1.5rem 2rem;
        }

       .logo{
           font-size : 2.5rem;
            color : var(--primary-500);
            font-weight : 700;
             letter-spacing : 2px;
         }

         .nav-link{
              color : var(--gray-900);
              padding : 0.5rem 0.5rem 0.5rem 0.5rem;
               transition : var(--transition);
               letter-spacing : 2px;
          }

        .nav-link:hover{
            color : var(--primary-500);
          }

        .active{
          color : var(--primary-500)
         }

         @media (min-width : 768px){
            .nav-center{
               flex-direction : row; 
               justify-content : space-between;
                align-items : center;
            }
             .nav-links{
                flex-direction : row;
                 margin-top : 0; 
             }
         }
  `;

    export default Wrapper;