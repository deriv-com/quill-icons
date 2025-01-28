import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsAlignLeftSmBoldIcon = (
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
      <path d='M0 4.406c0-.355.273-.656.656-.656.356 0 .657.3.657.656v12.688c0 .383-.301.656-.657.656A.63.63 0 0 1 0 17.094zm4.813 4.157h7.875v-1.75H4.812zM3.5 6.813c0-.711.574-1.313 1.313-1.313h7.875c.71 0 1.312.602 1.312 1.313v1.75c0 .738-.602 1.312-1.312 1.312H4.812A1.296 1.296 0 0 1 3.5 8.563zm1.313 7.875h4.375v-1.75H4.812zM3.5 12.938c0-.711.574-1.313 1.313-1.313h4.375c.71 0 1.312.602 1.312 1.313v1.75c0 .738-.602 1.312-1.312 1.312H4.812A1.296 1.296 0 0 1 3.5 14.688z' />
    </g>
    <defs>
      <clipPath id='e673f807e626cd3dec779f33b5025481__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsAlignLeftSmBoldIcon);
export default ForwardRef;
