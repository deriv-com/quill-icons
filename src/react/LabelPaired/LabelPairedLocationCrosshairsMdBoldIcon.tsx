import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8 4a.76.76 0 0 1 .75.75v1.313a6.034 6.034 0 0 1 5.188 5.187h1.312A.76.76 0 0 1 16 12a.74.74 0 0 1-.75.75h-1.312c-.344 2.719-2.5 4.875-5.188 5.219v1.281A.74.74 0 0 1 8 20a.72.72 0 0 1-.75-.75v-1.281a6.036 6.036 0 0 1-5.219-5.219H.75A.72.72 0 0 1 0 12a.74.74 0 0 1 .75-.75h1.281c.344-2.687 2.5-4.844 5.219-5.187V4.75A.74.74 0 0 1 8 4m-4.5 8c0 1.625.844 3.094 2.25 3.906a4.46 4.46 0 0 0 4.5 0A4.54 4.54 0 0 0 12.5 12c0-1.594-.875-3.062-2.25-3.875a4.46 4.46 0 0 0-4.5 0A4.46 4.46 0 0 0 3.5 12m6 0c0-.531-.312-1-.75-1.281-.469-.281-1.062-.281-1.5 0-.469.281-.75.75-.75 1.281 0 .563.281 1.031.75 1.313.438.28 1.031.28 1.5 0 .438-.282.75-.75.75-1.313M5 12c0-1.062.563-2.031 1.5-2.594.906-.531 2.063-.531 3 0C10.406 9.97 11 10.937 11 12c0 1.094-.594 2.063-1.5 2.625-.937.531-2.094.531-3 0A3.03 3.03 0 0 1 5 12' />
    </g>
    <defs>
      <clipPath id='c7454b54de1cebc44f69122ea053403f__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsMdBoldIcon);
export default ForwardRef;
