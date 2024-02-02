import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpRightFromSquareCaptionBoldIcon = (
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
      <path d='M7.125 4.063q.047-.516.563-.563h3.75q.514.047.562.563v3.75q-.047.514-.562.562-.516-.047-.563-.562V5.422l-5.227 5.226q-.397.33-.796 0-.33-.397 0-.796l5.226-5.227h-2.39q-.516-.047-.563-.562m-5.437.187h3q.514.047.562.563-.047.514-.562.562h-3q-.516.047-.563.563v7.875q.047.514.563.562h7.875q.514-.047.562-.562v-3q.047-.516.563-.563.514.047.562.563v3q-.024.726-.492 1.195-.47.468-1.195.492H1.686q-.726-.024-1.195-.492-.468-.47-.492-1.195V5.937q.024-.726.492-1.195.469-.468 1.196-.492' />
    </g>
    <defs>
      <clipPath id='adc764987c4f8787__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpRightFromSquareCaptionBoldIcon);
export default ForwardRef;
