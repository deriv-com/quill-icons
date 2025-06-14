import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleSixSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.688 10.75c0-2.023-1.094-3.883-2.844-4.922a5.71 5.71 0 0 0-5.688 0 5.68 5.68 0 0 0-2.843 4.922c0 2.05 1.066 3.91 2.843 4.95a5.71 5.71 0 0 0 5.688 0c1.75-1.04 2.844-2.9 2.844-4.95M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m7 2.188c.465 0 .875-.247 1.121-.657.246-.383.246-.902 0-1.312-.246-.383-.656-.656-1.121-.656-.492 0-.902.273-1.148.656-.247.41-.247.93 0 1.312.246.41.656.656 1.148.656m-2.625-1.313a3.07 3.07 0 0 1 1.04-2.297l2.241-1.914a.68.68 0 0 1 .93.082.68.68 0 0 1-.082.93l-.793.683a2.616 2.616 0 0 1 1.914 2.516 2.626 2.626 0 0 1-5.25 0' />
    </g>
    <defs>
      <clipPath id='bc6524f0d32d1388a4ff57a01e6b0f15__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleSixSmBoldIcon);
export default ForwardRef;
