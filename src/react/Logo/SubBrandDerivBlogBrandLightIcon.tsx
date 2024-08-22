import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SubBrandDerivBlogBrandLightIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 318 72'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#414652'
      d='M202.2 58.466q-1.509 0-3.304-.072a92 92 0 0 1-3.52-.216 84 84 0 0 1-3.449-.36 27 27 0 0 1-3.161-.574V8.97q1.437-.36 3.161-.575a84 84 0 0 1 3.449-.359 92 92 0 0 1 3.52-.215 78 78 0 0 1 3.232-.072q4.311 0 8.046.646 3.808.647 6.537 2.227 2.802 1.509 4.383 4.023 1.58 2.515 1.58 6.178 0 4.095-1.94 6.753-1.94 2.586-5.172 3.88 4.382 1.292 6.968 4.094t2.587 7.902q0 7.471-5.532 11.279-5.46 3.736-17.385 3.736m-6.537-23.635v17.528q.79.072 1.868.144.933.072 2.155.144h2.945q3.09 0 5.819-.36 2.802-.43 4.885-1.436 2.084-1.006 3.305-2.802 1.293-1.796 1.293-4.526 0-2.442-.934-4.095-.934-1.724-2.73-2.73-1.724-1.005-4.167-1.436t-5.459-.431zm0-5.604h7.327q2.587 0 4.885-.359 2.3-.36 3.952-1.293 1.724-.934 2.658-2.442 1.005-1.509 1.005-3.808 0-2.155-1.005-3.592-1.006-1.508-2.802-2.37-1.725-.934-4.095-1.365a28 28 0 0 0-5.029-.431q-2.657 0-4.166.072a40 40 0 0 0-2.73.215zM242.83 58.753q-6.177-.144-8.764-2.658t-2.586-7.83V3.438l6.681-1.15v44.899q0 1.651.287 2.73.288 1.077.934 1.724.647.645 1.724 1.006 1.078.287 2.658.503zM281.367 39.357q0 4.453-1.293 8.045-1.294 3.592-3.664 6.179a16 16 0 0 1-5.531 4.022q-3.233 1.365-7.041 1.365-3.807 0-7.04-1.365a16.7 16.7 0 0 1-5.603-4.023q-2.3-2.586-3.592-6.178t-1.293-8.045q0-4.383 1.293-7.974 1.293-3.664 3.592-6.25a15.9 15.9 0 0 1 5.603-3.951q3.233-1.437 7.04-1.437t7.041 1.436a15.2 15.2 0 0 1 5.531 3.952q2.37 2.586 3.664 6.25 1.293 3.591 1.293 7.974m-6.968 0q0-6.322-2.874-9.986-2.802-3.735-7.687-3.735t-7.758 3.735q-2.802 3.664-2.802 9.986 0 6.32 2.802 10.057 2.874 3.663 7.758 3.664 4.885 0 7.687-3.664 2.874-3.736 2.874-10.057M311.312 54.299q-.862.575-3.376 1.508-2.443.862-5.747.862-3.376 0-6.394-1.077a14.1 14.1 0 0 1-5.172-3.305q-2.227-2.298-3.52-5.675t-1.293-8.046q0-4.095 1.221-7.47 1.22-3.45 3.52-5.892 2.37-2.514 5.747-3.879 3.376-1.437 7.615-1.437 4.67 0 8.117.719 3.52.646 5.891 1.221v33.333q0 8.62-4.454 12.5-4.454 3.879-13.505 3.879-3.52 0-6.681-.575-3.09-.574-5.388-1.365l1.221-5.818q2.011.79 4.885 1.364 2.946.647 6.106.647 5.963 0 8.549-2.37 2.658-2.372 2.658-7.544zm-.072-27.73q-1.005-.287-2.73-.502-1.652-.288-4.525-.288-5.388 0-8.334 3.52-2.873 3.52-2.873 9.34 0 3.231.79 5.53.862 2.3 2.227 3.808 1.437 1.509 3.233 2.227 1.868.718 3.807.718 2.659 0 4.885-.718 2.227-.79 3.52-1.796z'
    />
    <path
      fill='#FF444F'
      d='m34.986 1.829-2.99 16.955H21.618c-9.682 0-18.911 7.845-20.622 17.527l-.724 4.12C-1.43 50.115 5.03 57.96 14.712 57.96h8.656c7.057 0 13.78-5.713 15.021-12.77L46.361 0zM27.622 43.59c-.382 2.18-2.344 3.954-4.524 3.954h-5.26c-4.351 0-7.263-3.533-6.5-7.893l.454-2.57c.772-4.351 4.925-7.892 9.277-7.892h9.092zm87.292 14.367 6.81-38.634h10.772l-6.81 38.634h-10.781zm1.165-38.188-1.622 9.193c-5.104-1.586-10.369-1.081-11.987-.759q-2.621 14.881-5.245 29.764h-10.78L92.91 21.32c3.506-1.452 12.115-4.399 23.169-1.55m-43.677-.993h-8.385c-8.17 0-15.96 6.62-17.4 14.79l-1.694 9.603c-1.44 8.17 4.01 14.79 12.18 14.79h17.838l1.83-10.382H60.006c-2.72 0-4.543-2.204-4.057-4.933l.055-.326h27.027l1.543-8.752c1.44-8.17-4.01-14.79-12.18-14.79zm1.36 13.963-.063.557H57.63l.087-.493c.485-2.721 2.968-5.116 5.696-5.116h6.277c2.698 0 4.52 2.355 4.074 5.052m100.765-13.416c-3.672 9.763-12.088 26.371-20.24 38.634h-10.78c-3.742-11.671-6.158-27.933-6.619-38.634h10.78c.194 3.49 1.757 16.438 3.54 25.483 4.892-8.8 10.284-20.345 12.531-25.483z'
    />
  </svg>
);
const ForwardRef = forwardRef(SubBrandDerivBlogBrandLightIcon);
export default ForwardRef;
