import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLaptopCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={15}
    height={18}
    viewBox='0 0 15 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 5H3a.73.73 0 0 0-.54.21.73.73 0 0 0-.21.54v6H1.5v-6q.024-.632.445-1.055Q2.368 4.274 3 4.25h9q.633.024 1.055.445.421.423.445 1.055v6h-.75v-6a.73.73 0 0 0-.21-.54A.73.73 0 0 0 12 5M1.805 14h11.39q.774-.047 1.008-.75H.797q.234.703 1.008.75M0 12.945q.047-.398.445-.445h14.11q.398.047.445.445-.023.774-.516 1.29-.515.492-1.289.515H1.805q-.774-.023-1.266-.516Q.024 13.72 0 12.945' />
    </g>
    <defs>
      <clipPath id='c7689220bc169be06e67fe7351c05eed__a'>
        <path d='M0 0h15v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLaptopCaptionRegularIcon);
export default ForwardRef;
