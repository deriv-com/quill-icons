import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightAdBlockedIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 128 128'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#fff'
      d='M78.706 20.684v82.793c0 1.379-.447 2.64-1.2 3.663a6.2 6.2 0 0 1-3.883 2.426h-.002a6.2 6.2 0 0 1-1.8.057l-49.427-4.017a6.83 6.83 0 0 1-6.056-6.785v-85.06c0-2.978 2.27-5.375 5.104-5.669h.012q.59-.061 1.21.005l6.933.77 5.156.574 36.08 2.44a8.853 8.853 0 0 1 7.875 8.8z'
    />
    <path
      fill='#000'
      d='M72.53 110q-.374 0-.749-.042l-49.428-4.017A7.16 7.16 0 0 1 16 98.821v-85.06a6.016 6.016 0 0 1 6.698-5.997l48.168 3.784a9.18 9.18 0 0 1 8.174 9.134v82.794a6.45 6.45 0 0 1-1.266 3.86 6.5 6.5 0 0 1-4.094 2.558q-.008 0-.016.002a6.5 6.5 0 0 1-1.136.101zM21.492 8.425s-.015.002-.018.004a5.346 5.346 0 0 0-4.802 5.333v85.06a6.487 6.487 0 0 0 5.755 6.451l49.429 4.017a5.8 5.8 0 0 0 1.701-.054l.015-.001a5.82 5.82 0 0 0 3.66-2.294 5.8 5.8 0 0 0 1.135-3.462V20.685a8.507 8.507 0 0 0-7.576-8.465L22.624 8.437a5.5 5.5 0 0 0-1.132-.008z'
    />
    <path
      fill='#EBECEE'
      d='M88.652 18.952v82.793a6.185 6.185 0 0 1-5.84 6.177v.011l-9.193 1.632a6.2 6.2 0 0 0 3.883-2.427 6.14 6.14 0 0 0 1.2-3.662V20.682a8.85 8.85 0 0 0-7.874-8.8l-36.08-2.44-5.156-.573-6.933-.77a6 6 0 0 0-1.21-.008l11.803-1.655h.002a5.8 5.8 0 0 1 1.707-.067l45.815 3.782a8.854 8.854 0 0 1 7.874 8.799z'
    />
    <path
      fill='#000'
      d='M73.622 109.903a.336.336 0 0 1-.059-.668 5.83 5.83 0 0 0 3.672-2.295 5.8 5.8 0 0 0 1.136-3.463V20.684a8.507 8.507 0 0 0-7.576-8.465L22.627 8.435a5.5 5.5 0 0 0-1.142-.006.338.338 0 0 1-.08-.67l11.803-1.654a6 6 0 0 1 1.793-.067l45.815 3.781a9.183 9.183 0 0 1 8.173 9.134v82.794a6.52 6.52 0 0 1-6.068 6.508.3.3 0 0 1-.057.013l-9.195 1.631zM24.654 7.981l46.214 3.567a9.18 9.18 0 0 1 8.174 9.134v82.794a6.45 6.45 0 0 1-1.267 3.86 6.5 6.5 0 0 1-1.57 1.522l6.484-1.249a.3.3 0 0 1 .106-.025 5.843 5.843 0 0 0 5.52-5.842V18.948a8.51 8.51 0 0 0-7.577-8.465L34.923 6.702a5.4 5.4 0 0 0-1.636.067l-8.636 1.21z'
    />
    <g stroke='#000' strokeLinecap='round' strokeLinejoin='round' strokeWidth={0.706}>
      <path d='m24.257 64.895 45.197 3.623M24.384 74.664l45.197 3.623M24.51 84.432l45.197 3.623M24.637 94.2l45.197 3.623' />
    </g>
    <path
      fill='#000'
      fillRule='evenodd'
      d='M36.168 21.26a.4.4 0 0 1 .375.279l7.443 23.512a.4.4 0 0 1-.763.242l-2.495-7.883-9.44-.72-2.509 7.061a.4.4 0 1 1-.753-.268l2.61-7.348 5.148-14.608a.4.4 0 0 1 .384-.267m-4.604 14.65 8.904.678L36.14 22.92zm16.72-14.075a.4.4 0 0 1 .3-.111l7.96.427a9.4 9.4 0 0 1 8.896 9.243l.101 6.638c.077 4.99-4.188 8.946-9.158 8.494l-7.5-.68a.4.4 0 0 1-.364-.393l-.357-23.324a.4.4 0 0 1 .123-.294m.684.71.345 22.536 7.142.648c4.497.409 8.356-3.17 8.287-7.685l-.102-6.638a8.6 8.6 0 0 0-8.138-8.456z'
      clipRule='evenodd'
    />
    <path
      fill='#FF535E'
      d='M120.998 98.84c-.288 1.974-.826 5.426-3.082 9.125a22 22 0 0 1-4.22 5.025 22 22 0 0 1-2.468 1.872q-4.782 2.29-9.569 4.581c4.411-2.548 6.627-6.149 7.502-7.609 2.26-3.776 2.794-7.207 3.082-9.193.898-6.195-.556-11.028-1.226-13.169a31.8 31.8 0 0 0-5.744-10.647c-1.235-1.507-3.744-4.506-8.053-6.969-2.38-1.36-6.555-3.674-12.292-3.503a20.7 20.7 0 0 0-6.788 1.374q4.025-1.999 8.047-3.999a23.1 23.1 0 0 1 5.604-1.277 23 23 0 0 1 6.215.21c3.562.625 6.043 1.97 7.548 2.799.847.469 4.091 2.32 7.356 5.885a31.7 31.7 0 0 1 4.411 6.216 32.4 32.4 0 0 1 3.503 10.244c.282 1.743.773 4.928.174 9.035'
    />
    <path
      fill='#000'
      d='M101.661 119.776a.334.334 0 0 1-.167-.621c4.43-2.56 6.654-6.272 7.384-7.493 2.273-3.796 2.771-7.227 3.039-9.07.906-6.242-.634-11.167-1.215-13.022a31.2 31.2 0 0 0-5.683-10.534c-1.081-1.319-3.611-4.406-7.962-6.89-2.22-1.27-6.356-3.632-12.118-3.46a20.3 20.3 0 0 0-6.678 1.35.334.334 0 0 1-.424-.176.335.335 0 0 1 .156-.433l5.355-2.66 2.693-1.336.035-.015a23.5 23.5 0 0 1 5.683-1.296 23.4 23.4 0 0 1 6.307.213c3.676.645 6.263 2.07 7.651 2.836 1.507.835 4.478 2.718 7.44 5.951a32.2 32.2 0 0 1 4.458 6.282 32.5 32.5 0 0 1 3.54 10.35c.257 1.59.795 4.896.176 9.136-.276 1.894-.792 5.421-3.129 9.25a22.4 22.4 0 0 1-4.284 5.101 22 22 0 0 1-2.507 1.903l-.038.021-6.372 3.051-3.197 1.53a.3.3 0 0 1-.143.033zM85.517 68.01c5.648 0 9.825 2.389 11.869 3.557 4.458 2.546 7.042 5.7 8.147 7.047a31.8 31.8 0 0 1 5.803 10.758c.592 1.893 2.166 6.923 1.238 13.317-.275 1.889-.785 5.405-3.127 9.316-.558.931-1.961 3.276-4.518 5.505l6.136-2.937a21.4 21.4 0 0 0 2.413-1.833 21.7 21.7 0 0 0 4.155-4.948c2.266-3.713 2.768-7.151 3.038-8.999.603-4.138.078-7.377-.175-8.934a31.8 31.8 0 0 0-3.468-10.137 31.6 31.6 0 0 0-4.365-6.151c-2.897-3.164-5.8-5.003-7.27-5.818-1.354-.747-3.877-2.138-7.445-2.763a22.6 22.6 0 0 0-6.126-.206c-1.88.188-3.73.61-5.505 1.254l-2.677 1.329q-1.037.517-2.075 1.03a20.6 20.6 0 0 1 3.948-.382z'
    />
    <path
      fill='#FF444F'
      d='m102.371 94.38-10.78 10.212q-4.377 2.079-8.755 4.158c6.216-5.888 12.433-11.78 18.651-17.668.286.762.653 1.89.884 3.297'
    />
    <path
      fill='#000'
      d='M82.838 109.083a.333.333 0 0 1-.23-.574l18.651-17.668a.332.332 0 0 1 .539.123c.411 1.09.714 2.22.903 3.36.019.11-.02.22-.099.296l-10.78 10.213a.4.4 0 0 1-.087.058l-8.755 4.158a.3.3 0 0 1-.144.032zm18.509-17.41L84.588 107.55l6.816-3.237q5.308-5.028 10.612-10.055a17 17 0 0 0-.669-2.586'
    />
    <path
      fill='#FF444F'
      d='M99.324 106.936c-2.941 3.288-6.76 3.893-7.55 4.003-4.744.657-8.197-1.658-8.949-2.19l8.756-4.159c.549.333 1.266.722 2.136 1.086.359.148 1.387.563 2.802.875.734.162 1.68.323 2.806.383z'
    />
    <path
      fill='#000'
      d='M90.082 111.39c-3.66 0-6.362-1.6-7.446-2.368a.34.34 0 0 1-.14-.3.33.33 0 0 1 .188-.271l8.755-4.158a.33.33 0 0 1 .315.016c.663.403 1.367.761 2.092 1.065a16.8 16.8 0 0 0 5.497 1.232c.129.007.24.087.29.205a.33.33 0 0 1-.06.349c-2.798 3.127-6.354 3.917-7.753 4.112-.6.083-1.182.12-1.74.12zm-6.581-2.591c1.45.915 4.415 2.34 8.231 1.811 1.248-.173 4.306-.847 6.871-3.395a17.7 17.7 0 0 1-5.011-1.229c-.7-.293-1.38-.635-2.026-1.016z'
    />
    <path
      fill='#FF444F'
      d='M83.563 84.805a15.6 15.6 0 0 0-.488 5.612c.053.585.138 1.132.238 1.635l-7.768 7.401a16.3 16.3 0 0 1-1.33-6.164c-.027-1.54-.035-4.497 1.786-7.565.652-1.097 2.588-3.983 6.304-5.394a11.6 11.6 0 0 1 3.925-.755 15.1 15.1 0 0 0-2.668 5.23'
    />
    <path
      fill='#000'
      d='M75.548 99.786a.334.334 0 0 1-.306-.201 16.5 16.5 0 0 1-1.357-6.291c-.025-1.469-.077-4.524 1.833-7.74.88-1.483 2.89-4.176 6.472-5.535a12 12 0 0 1 4.037-.777.334.334 0 0 1 .268.539 14.7 14.7 0 0 0-2.61 5.115 15.2 15.2 0 0 0-.476 5.49c.05.534.128 1.073.233 1.602a.33.33 0 0 1-.097.306l-7.726 7.362-.041.04a.33.33 0 0 1-.23.091zm9.993-19.844c-1.072.085-2.117.32-3.115.7-3.392 1.287-5.3 3.843-6.136 5.252-1.813 3.054-1.763 5.983-1.74 7.39.03 1.914.406 3.794 1.12 5.593l7.285-6.94a16 16 0 0 1-.208-1.49c-.23-2.456.145-4.473.499-5.733a15.3 15.3 0 0 1 2.295-4.772'
    />
    <path
      fill='#FF7E88'
      d='M111.02 89.473a31.8 31.8 0 0 0-5.743-10.647c-1.236-1.505-3.744-4.506-8.056-6.97-2.378-1.358-6.553-3.674-12.293-3.502a20.7 20.7 0 0 0-9.07 2.416c-.931.498-4.034 2.251-6.76 5.814-2.79 3.647-3.652 7.194-4.098 9.105-1.005 4.323-.639 7.774-.42 9.665.2 1.755.78 5.451 2.765 9.701 2.607 5.575 6.144 8.915 7.144 9.823 2.114 1.921 6.056 5.502 12.398 6.725 1.996.384 8.08 1.465 14.29-1.891 4.734-2.559 7.079-6.368 7.985-7.881 2.261-3.774 2.793-7.207 3.082-9.193.9-6.193-.555-11.028-1.225-13.169zM74.211 93.29c-.025-1.54-.033-4.498 1.787-7.565.652-1.097 2.59-3.983 6.304-5.394 5.858-2.224 11.14 1.118 11.732 1.505l-18.49 17.617a16.3 16.3 0 0 1-1.331-6.165zm28.281 5.673c-.194 1.774-.535 4.891-2.967 7.75-2.966 3.484-6.94 4.117-7.75 4.228-4.743.657-8.196-1.658-8.948-2.189l18.649-17.67a17.1 17.1 0 0 1 1.016 7.882'
    />
    <path
      fill='#000'
      d='M91.631 122.407q-2.333 0-4.805-.475c-6.434-1.241-10.417-4.861-12.558-6.805-1.675-1.522-4.842-4.835-7.222-9.93-1.447-3.095-2.414-6.487-2.796-9.803-.198-1.724-.61-5.311.427-9.78.411-1.769 1.268-5.451 4.157-9.232 2.513-3.287 5.38-5.11 6.866-5.905a21 21 0 0 1 9.218-2.455c5.958-.18 10.19 2.244 12.468 3.546 4.451 2.544 7.041 5.7 8.147 7.048a31.9 31.9 0 0 1 5.803 10.758c.592 1.893 2.166 6.921 1.238 13.315-.275 1.889-.785 5.409-3.126 9.316-.791 1.322-3.202 5.347-8.112 8.002-2.957 1.598-6.207 2.402-9.703 2.402zm-6.094-53.73q-.297 0-.6.009a20.3 20.3 0 0 0-8.924 2.377c-1.44.768-4.215 2.534-6.652 5.721-2.804 3.666-3.638 7.254-4.038 8.979-1.012 4.356-.61 7.866-.415 9.552.375 3.247 1.321 6.567 2.738 9.599 2.332 4.988 5.43 8.23 7.068 9.719 2.092 1.901 5.986 5.439 12.237 6.643 5.2 1.003 9.933.378 14.068-1.858 4.75-2.568 7.089-6.475 7.857-7.757 2.272-3.794 2.771-7.226 3.039-9.07.907-6.244-.634-11.168-1.214-13.02a31.2 31.2 0 0 0-5.684-10.536c-1.083-1.32-3.617-4.408-7.962-6.891-2.142-1.224-6.068-3.468-11.518-3.468zm4.544 42.712c-3.656 0-6.36-1.6-7.448-2.366a.333.333 0 0 1-.037-.514l18.649-17.67a.333.333 0 0 1 .539.123 17.45 17.45 0 0 1 1.034 8.034c-.191 1.745-.545 4.992-3.045 7.928-2.823 3.314-6.504 4.141-7.956 4.342-.6.084-1.179.12-1.738.12zm-6.727-2.681c1.394.907 4.435 2.449 8.374 1.903 1.377-.191 4.866-.973 7.54-4.115 2.368-2.781 2.695-5.778 2.892-7.568l.331.035-.331-.037a16.8 16.8 0 0 0-.825-7.252zm-7.814-8.922a.334.334 0 0 1-.306-.201 16.5 16.5 0 0 1-1.357-6.29c-.023-1.471-.073-4.53 1.833-7.74.88-1.484 2.892-4.175 6.472-5.535 5.841-2.218 11.048.893 12.032 1.538.085.055.14.146.148.248a.34.34 0 0 1-.101.271L75.77 99.693a.33.33 0 0 1-.23.092zm-.998-6.502c.03 1.915.408 3.794 1.12 5.594l17.827-16.984c-1.38-.812-6.046-3.16-11.073-1.25-3.391 1.287-5.299 3.843-6.136 5.252-1.81 3.049-1.761 5.981-1.74 7.39z'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivLightAdBlockedIcon);
export default ForwardRef;