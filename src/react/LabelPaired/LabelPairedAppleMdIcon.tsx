import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppleMdIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={24}
    viewBox='0 0 12 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.938 12.406c0 .063-.094 1.906 1.937 2.875C11.5 16.437 10.188 19 8.656 19c-.875 0-1.375-.562-2.375-.562-1.031 0-1.593.562-2.375.562-1.5.063-2.937-2.75-3.343-3.906a7.5 7.5 0 0 1-.438-2.531c0-2.782 1.844-4.126 3.594-4.157.844 0 1.906.594 2.375.594.437 0 1.656-.719 2.781-.625 1.156.094 2.031.531 2.625 1.375-1.031.656-1.562 1.5-1.562 2.656m-1.75-5.125C7.562 8 6.812 8.406 6 8.344c-.062-.844.25-1.625.813-2.25.5-.563 1.375-1.032 2.125-1.094 0 .344.093 1.281-.75 2.281' />
    </g>
    <defs>
      <clipPath id='0fa7d0971aaaa4ff8a08fe39b3c26367__a'>
        <path d='M0 0h12v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppleMdIcon);
export default ForwardRef;
