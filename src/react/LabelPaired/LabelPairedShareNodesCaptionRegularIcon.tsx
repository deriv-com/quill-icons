import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedShareNodesCaptionRegularIcon = (
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
      <path d='M10.75 6.125A1.866 1.866 0 0 1 8.875 8c-.54 0-1.031-.21-1.383-.586L3.953 9.195c.024.094.047.211.047.305 0 .117-.023.234-.047.328l3.54 1.758A1.97 1.97 0 0 1 8.874 11a1.88 1.88 0 0 1 1.875 1.875 1.866 1.866 0 0 1-1.875 1.875A1.85 1.85 0 0 1 7 12.875c0-.21.023-.445.094-.633l-3.399-1.71a1.88 1.88 0 0 1-1.57.843A1.85 1.85 0 0 1 .25 9.5c0-1.031.82-1.875 1.875-1.875.656 0 1.219.352 1.57.867l3.399-1.71A2 2 0 0 1 7 6.124c0-1.031.82-1.875 1.875-1.875a1.88 1.88 0 0 1 1.875 1.875m-8.625 4.5c.398 0 .75-.21.96-.562.212-.329.212-.774 0-1.126-.21-.328-.562-.562-.96-.562-.422 0-.773.234-.984.563-.211.351-.211.796 0 1.124.21.352.562.563.984.563M10 6.125c0-.398-.234-.75-.562-.96a1.08 1.08 0 0 0-1.126 0 1.122 1.122 0 0 0 0 1.945c.329.21.774.21 1.126 0 .328-.212.562-.563.562-.985M8.875 14c.398 0 .75-.21.96-.562a1.08 1.08 0 0 0 0-1.126c-.21-.328-.562-.562-.96-.562-.422 0-.773.234-.984.563-.211.351-.211.796 0 1.124.21.352.562.563.984.563' />
    </g>
    <defs>
      <clipPath id='69cccd9d7e5c1611631cf41777fd00bd__a'>
        <path d='M0 0h11v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedShareNodesCaptionRegularIcon);
export default ForwardRef;
