import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedXTwitterLgIcon = (
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
      <path d='M15.195 7.375h2.735l-6.016 6.914 7.11 9.336h-5.547l-4.375-5.664-4.961 5.664H1.367l6.446-7.344-6.797-8.906h5.703l3.906 5.195zm-.976 14.61h1.523L5.898 8.937h-1.64z' />
    </g>
    <defs>
      <clipPath id='58f40c146074a3dcb6c3f78600ec5446__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedXTwitterLgIcon);
export default ForwardRef;
