import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightIcCashierUnderMaintenanceIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 96 96'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#dfbf32754bc8e2b6f1c395e69ce433ac__a)'>
      <mask
        id='dfbf32754bc8e2b6f1c395e69ce433ac__b'
        width={96}
        height={96}
        x={0}
        y={0}
        maskUnits='userSpaceOnUse'
        style={{
          maskType: 'luminance',
        }}
      >
        <path fill='#fff' d='M96 0H0v96h96z' />
      </mask>
      <g mask='url(#dfbf32754bc8e2b6f1c395e69ce433ac__b)'>
        <path
          fill='#FFAD3A'
          d='M42.206 70.894c-1.002-1.74-3.313-2.153-4.732-.733l-17.17 17.165c-2.814 2.813-7.293 3.524-10.6 1.31-4.447-2.978-4.883-9.143-1.307-12.745l25.275-25.275a2.99 2.99 0 0 0-.006-4.235c-1.172-1.156-3.066-1.156-4.397.007L4.012 71.644c-5.553 5.554-5.553 14.599 0 20.156 3.12 3.146 7.487 4.631 11.98 4.044 3.268-.426 6.238-2.13 8.569-4.46L41.537 74.41c.915-.915 1.185-2.347.535-3.466.153-.014.134-.032.134-.051m6.506-54.27a21.4 21.4 0 0 1 3.184-4.088c4.266-4.24 9.867-6.538 15.726-6.538 1.289 0 2.578.117 3.866.328L58.504 19.354l2.578 15.559 15.585 2.578 13.007-12.98c1.242 7.147-1.008 14.386-6.21 19.593a21 21 0 0 1-2.668 2.25c-1.458 1.036-1.545 3.184-.277 4.444a3.076 3.076 0 0 0 3.95.3 26 26 0 0 0 3.237-2.777c7.078-7.076 9.866-17.128 7.429-26.85-.422-1.78-1.805-3.186-3.585-3.679a5.11 5.11 0 0 0-4.992 1.313L74.583 31.079 66.28 29.68 64.9 21.41 76.874 9.413a5.11 5.11 0 0 0 1.313-4.967c-.492-1.78-1.922-3.139-3.704-3.585-9.678-2.415-19.725.351-26.83 7.427-1.551 1.565-2.843 3.301-3.935 5.135-.71 1.194-.571 2.71.411 3.69 1.34 1.345 3.608 1.13 4.584-.49M11.832 80.98c0 1.64 1.359 2.832 3 2.832 1.64 0 2.83-1.36 2.83-2.832s-1.358-2.83-2.83-2.83c-1.473 0-3 1.18-3 2.83m82.405-7.968L70.913 49.669c-2.93-2.929-6.773-4.382-10.617-4.382-2.883 0-5.79.82-8.272 2.484L35.83 31.744V17.99L12.002-.007 0 11.83l18 23.832 13.757-.006 16.031 16.028c-3.866 5.835-3.21 13.73 1.922 18.881L73.054 93.91C74.194 95.4 75.58 96 77.287 96a5.9 5.9 0 0 0 4.22-1.758l12.58-12.746c2.494-2.352 2.494-6.14.15-8.483M29.831 29.83H21L7.922 12.56l4.472-4.639 17.269 13.075v8.836zm47.438 60.15L53.944 66.638c-1.71-1.711-2.648-3.96-2.648-6.351a8.84 8.84 0 0 1 2.648-6.35 8.84 8.84 0 0 1 6.352-2.648c2.39 0 4.665.937 6.35 2.647l23.345 23.307z'
        />
      </g>
    </g>
    <defs>
      <clipPath id='dfbf32754bc8e2b6f1c395e69ce433ac__a'>
        <path fill='#fff' d='M0 0h96v96H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightIcCashierUnderMaintenanceIcon);
export default ForwardRef;
