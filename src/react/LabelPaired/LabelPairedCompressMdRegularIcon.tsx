import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCompressMdRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={24}
    viewBox='0 0 14 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M5 5.5v4q-.03.47-.5.5h-4q-.469-.03-.5-.5.031-.469.5-.5H4V5.5q.031-.469.5-.5.47.031.5.5M.5 14h4q.47.031.5.5v4q-.03.47-.5.5-.469-.03-.5-.5V15H.5q-.469-.03-.5-.5.031-.469.5-.5M10 5.5V9h3.5q.47.031.5.5-.03.47-.5.5h-4q-.469-.03-.5-.5v-4q.031-.469.5-.5.47.031.5.5M9.5 14h4q.47.031.5.5-.03.47-.5.5H10v3.5q-.03.47-.5.5-.469-.03-.5-.5v-4q.031-.469.5-.5' />
    </g>
    <defs>
      <clipPath id='002f17d430d1456fd198cfb2e4e587ac__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCompressMdRegularIcon);
export default ForwardRef;
