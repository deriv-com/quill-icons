import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedScissorsMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M15.875 17.844c-.187.218-.5.218-.719.062l-4.75-4.062c-.219-.156-.219-.5-.062-.688.187-.219.5-.25.719-.062l4.75 4.031c.218.188.218.5.062.719m-6.906-6.469 6.187-5.25c.219-.156.531-.156.719.063.156.218.156.53-.062.718L6.5 14.75c.313.5.5 1.125.5 1.75C7 18.438 5.406 20 3.5 20A3.494 3.494 0 0 1 0 16.5C0 14.594 1.563 13 3.5 13c.906 0 1.75.375 2.375.969L8.188 12l-2.313-1.937A3.44 3.44 0 0 1 3.5 11 3.494 3.494 0 0 1 0 7.5C0 5.594 1.563 4 3.5 4 5.406 4 7 5.594 7 7.531a3.36 3.36 0 0 1-.5 1.75zM3.5 10c.875 0 1.688-.469 2.156-1.25.438-.75.438-1.719 0-2.5C5.188 5.5 4.375 5 3.5 5c-.906 0-1.719.5-2.187 1.25-.438.781-.438 1.75 0 2.5A2.53 2.53 0 0 0 3.5 10m0 4c-.906 0-1.719.5-2.187 1.25-.438.781-.438 1.75 0 2.5A2.53 2.53 0 0 0 3.5 19c.875 0 1.688-.469 2.156-1.25.438-.75.438-1.719 0-2.5C5.188 14.5 4.375 14 3.5 14' />
    </g>
    <defs>
      <clipPath id='6a0cc8c2bacc80be91e5060f72070041__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsMdRegularIcon);
export default ForwardRef;
