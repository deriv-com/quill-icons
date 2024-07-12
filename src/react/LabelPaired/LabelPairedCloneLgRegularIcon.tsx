import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCloneLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.5 24.25h8.75c.664 0 1.25-.547 1.25-1.25v-2.5h1.25V23c0 1.406-1.133 2.5-2.5 2.5H2.5A2.47 2.47 0 0 1 0 23v-8.75c0-1.367 1.094-2.5 2.5-2.5H5V13H2.5c-.703 0-1.25.586-1.25 1.25V23c0 .703.547 1.25 1.25 1.25M8.75 18h8.75c.664 0 1.25-.547 1.25-1.25V8c0-.664-.586-1.25-1.25-1.25H8.75c-.703 0-1.25.586-1.25 1.25v8.75c0 .703.547 1.25 1.25 1.25m-2.5-1.25V8c0-1.367 1.094-2.5 2.5-2.5h8.75C18.867 5.5 20 6.633 20 8v8.75c0 1.406-1.133 2.5-2.5 2.5H8.75a2.47 2.47 0 0 1-2.5-2.5' />
    </g>
    <defs>
      <clipPath id='95078c217d86619f4da5af63ec940aa3__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCloneLgRegularIcon);
export default ForwardRef;
