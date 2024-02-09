import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromSquareCaptionBoldIcon = (
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
      <path d='M6.398 3.664 9.023 6.29q.33.399 0 .797-.397.328-.796 0L6.562 5.422v5.766q-.045.514-.562.562-.516-.047-.562-.562V5.422L3.773 7.086q-.397.328-.796 0-.33-.399 0-.797l2.625-2.625q.397-.328.796 0m-4.71.586h.187q.516.047.563.563-.048.514-.563.562h-.187q-.516.047-.563.563v7.875q.047.514.563.562h8.625q.514-.047.562-.562V5.937q-.047-.514-.562-.562h-.188q-.516-.047-.562-.562.045-.516.562-.563h.188q.726.024 1.195.492.468.469.492 1.196v7.875q-.024.726-.492 1.195-.47.468-1.195.492H1.688q-.727-.024-1.196-.492-.468-.47-.492-1.195V5.937q.024-.726.492-1.195.469-.468 1.196-.492' />
    </g>
    <defs>
      <clipPath id='82890db6c1e4c1afdcf82cf12dd16a68__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromSquareCaptionBoldIcon);
export default ForwardRef;
