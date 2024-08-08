import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownToBracketCaptionBoldIcon = (
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
      <path d='m8.898 8.586-3 3c-.234.234-.585.234-.796 0l-3-3a.513.513 0 0 1 0-.774.513.513 0 0 1 .773 0l2.04 2.04v-5.79a.57.57 0 0 1 .562-.562c.328 0 .562.258.562.563v5.789l2.04-2.04c.233-.234.585-.234.796 0a.513.513 0 0 1 0 .774zm-7.523 2.976v1.876c0 .539.398.937.938.937h6.374a.925.925 0 0 0 .938-.937v-1.876c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563v1.874A2.066 2.066 0 0 1 8.688 15.5H2.311A2.05 2.05 0 0 1 .25 13.438v-1.876c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563' />
    </g>
    <defs>
      <clipPath id='fa53707aa14d60c5d1b5b59d4578aad4__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownToBracketCaptionBoldIcon);
export default ForwardRef;
