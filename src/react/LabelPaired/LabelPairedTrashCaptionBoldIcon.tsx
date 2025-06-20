import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTrashCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={18}
    viewBox='0 0 11 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.398 4.625c-.07 0-.117.047-.164.094l-.445.656h3.399l-.446-.656a.2.2 0 0 0-.164-.094zm4.149.75h1.641a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562h-.282l-.562 7.617a1.49 1.49 0 0 1-1.5 1.383H3.133c-.797 0-1.43-.586-1.5-1.383L1.07 6.5H.812a.54.54 0 0 1-.562-.562c0-.305.234-.563.563-.563H2.43l.867-1.29A1.34 1.34 0 0 1 4.398 3.5h2.18c.445 0 .867.234 1.102.586zM8.78 6.5H2.195l.563 7.547a.38.38 0 0 0 .375.328h4.71c.188 0 .352-.14.376-.328z' />
    </g>
    <defs>
      <clipPath id='2585a3ce87be3597469ddcce41ed4aed__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTrashCaptionBoldIcon);
export default ForwardRef;
