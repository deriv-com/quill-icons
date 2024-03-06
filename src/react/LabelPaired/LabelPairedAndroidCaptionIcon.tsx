import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAndroidCaptionIcon = (
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
      <path d='M10.117 10.578q.492-.047.563-.562-.07-.516-.563-.563-.516.047-.562.563.045.514.562.562m-6.234 0q.516-.047.562-.562-.045-.516-.562-.563-.492.047-.563.563.07.514.563.562m6.422-3.398a6.55 6.55 0 0 1 2.367 2.203q.915 1.359 1.078 3.117H.25q.165-1.757 1.078-3.117A6.55 6.55 0 0 1 3.695 7.18L2.57 5.234A.25.25 0 0 1 2.547 5a.23.23 0 0 1 .21-.117A.23.23 0 0 1 2.97 5l1.148 1.992A6.85 6.85 0 0 1 7 6.36q1.5 0 2.883.633L11.03 5a.23.23 0 0 1 .211-.117.23.23 0 0 1 .211.117.25.25 0 0 1-.023.234z' />
    </g>
    <defs>
      <clipPath id='01f4ad50bce572484573130a02ae9754__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAndroidCaptionIcon);
export default ForwardRef;
