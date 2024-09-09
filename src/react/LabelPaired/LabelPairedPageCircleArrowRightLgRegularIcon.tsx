import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPageCircleArrowRightLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={23}
    height={30}
    viewBox='0 0 23 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.25 8c0-1.367 1.094-2.5 2.5-2.5h7.07c.664 0 1.29.273 1.758.742l2.93 2.93c.469.469.742 1.094.742 1.758v2.343c-.469.118-.86.274-1.25.508V10.93c0-.352-.156-.664-.39-.899l-2.891-2.89a1.27 1.27 0 0 0-.899-.391H2.75c-.703 0-1.25.586-1.25 1.25v15c0 .703.547 1.25 1.25 1.25h9.063c.39.469.82.898 1.289 1.25H2.75A2.47 2.47 0 0 1 .25 23zM11.5 19.875c0-3.086 2.5-5.625 5.625-5.625 3.086 0 5.625 2.54 5.625 5.625a5.626 5.626 0 0 1-5.625 5.625 5.6 5.6 0 0 1-5.625-5.625m1.25 0a4.37 4.37 0 0 0 4.375 4.375c2.383 0 4.375-1.953 4.375-4.375 0-2.383-1.992-4.375-4.375-4.375-2.422 0-4.375 1.992-4.375 4.375m1.25 0c0-.312.273-.625.625-.625h3.477l-1.133-1.094a.66.66 0 0 1 0-.898.66.66 0 0 1 .898 0l2.188 2.187a.66.66 0 0 1 0 .899l-2.188 2.187a.66.66 0 0 1-.898 0 .66.66 0 0 1 0-.898l1.133-1.133h-3.477a.617.617 0 0 1-.625-.625' />
    </g>
    <defs>
      <clipPath id='eaa8fb88f057638276696fe6d99074cc__a'>
        <path d='M0 0h23v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPageCircleArrowRightLgRegularIcon);
export default ForwardRef;
