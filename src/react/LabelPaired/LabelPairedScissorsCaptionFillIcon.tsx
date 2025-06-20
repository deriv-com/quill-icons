import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedScissorsCaptionFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m6 8 3.281-3.281c.68-.68 1.735-.68 2.414 0a.41.41 0 0 1 0 .586l-6.632 6.633c.117.304.187.609.187.937A2.636 2.636 0 0 1 2.625 15.5 2.62 2.62 0 0 1 0 12.875a2.636 2.636 0 0 1 2.625-2.625c.328 0 .633.07.938.188L4.5 9.5l-.937-.914a2.6 2.6 0 0 1-.938.164A2.62 2.62 0 0 1 0 6.125 2.636 2.636 0 0 1 2.625 3.5c1.43 0 2.625 1.195 2.625 2.625a2.6 2.6 0 0 1-.187.96zm.516 3.54 1.5-1.5 3.68 3.679a.41.41 0 0 1 0 .586c-.68.68-1.735.68-2.415 0zM1.5 6.124c0 .422.21.773.563.984.328.211.773.211 1.124 0 .329-.21.563-.562.563-.984 0-.398-.234-.75-.562-.96a1.08 1.08 0 0 0-1.126 0c-.351.21-.562.562-.562.96m1.125 5.625c-.422 0-.773.234-.984.563-.211.351-.211.796 0 1.124a1.122 1.122 0 0 0 1.945 0c.21-.328.21-.773 0-1.124-.211-.329-.563-.563-.961-.563' />
    </g>
    <defs>
      <clipPath id='615484c4b4c6b96eec7dab2d3919079b__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedScissorsCaptionFillIcon);
export default ForwardRef;
