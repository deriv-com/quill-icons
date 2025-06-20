import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedWhatsappMdIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.875 7.063C13.188 8.375 14 10.093 14 11.968c0 3.812-3.187 6.937-7.031 6.937-1.157 0-2.282-.312-3.313-.843L0 19l.969-3.594a6.95 6.95 0 0 1-.938-3.469C.031 8.126 3.156 5 6.97 5c1.875 0 3.625.75 4.906 2.063M6.969 17.719c3.187 0 5.844-2.594 5.844-5.75 0-1.563-.657-3-1.75-4.094A5.7 5.7 0 0 0 7 6.188c-3.187 0-5.781 2.593-5.781 5.75 0 1.093.312 2.156.875 3.093l.156.219-.594 2.125 2.188-.594.187.125a5.8 5.8 0 0 0 2.938.813m3.187-4.313c.156.094.281.125.313.219.062.063.062.406-.094.813s-.844.78-1.156.812c-.563.094-1 .063-2.094-.437-1.75-.75-2.875-2.5-2.969-2.594-.093-.125-.687-.938-.687-1.813 0-.844.437-1.25.594-1.437a.59.59 0 0 1 .468-.219h.313c.125 0 .25-.031.406.313.125.343.5 1.187.531 1.28.032.095.063.188 0 .313-.312.656-.687.625-.5.938.688 1.156 1.344 1.562 2.375 2.062.157.094.25.063.375-.031.094-.125.438-.531.531-.687.126-.188.25-.157.407-.094.156.062 1 .469 1.187.562' />
    </g>
    <defs>
      <clipPath id='e3767f902d9cfb3dbd4e6d8d7f71e09c__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedWhatsappMdIcon);
export default ForwardRef;
