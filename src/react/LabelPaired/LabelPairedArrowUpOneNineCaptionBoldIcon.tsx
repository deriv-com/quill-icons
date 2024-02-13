import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpOneNineCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M10.938 4.813v2.812h.562q.515.047.563.563-.048.514-.563.562H9.25q-.516-.047-.562-.562.045-.516.562-.563h.563v-2.04l-.376.142q-.515.117-.726-.352-.117-.516.351-.727l1.126-.375a.6.6 0 0 1 .515.094q.235.165.235.446m-7.336-.399q.397-.329.796 0l2.25 2.25q.33.399 0 .797-.397.328-.796 0l-1.29-1.29v8.017q-.045.514-.562.562-.516-.047-.562-.562V6.172L2.148 7.46q-.397.328-.796 0-.33-.399 0-.797zm6.586 6.211a.97.97 0 0 0-.82.469 1 1 0 0 0 0 .937q.28.445.82.469a.97.97 0 0 0 .82-.469 1 1 0 0 0 0-.937.97.97 0 0 0-.82-.469m-.422 2.953a2.06 2.06 0 0 1-1.172-.703q-.445-.54-.469-1.312.024-.868.61-1.454.585-.585 1.453-.609.867.024 1.453.61.585.585.609 1.453 0 .772-.492 1.359l-1.313 1.617q-.375.375-.797.094-.374-.375-.093-.797z' />
    </g>
    <defs>
      <clipPath id='f8bd82e88da95ea68607ffda66dd49da__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpOneNineCaptionBoldIcon);
export default ForwardRef;
