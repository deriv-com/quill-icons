import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeXmarkXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M14.11 7.64c.515.235.89.798.89 1.36v18c0 .61-.375 1.125-.89 1.406a1.52 1.52 0 0 1-1.641-.281L6.14 22.5H3c-1.687 0-3-1.312-3-3v-3c0-1.64 1.313-3 3-3h3.14l6.329-5.578a1.52 1.52 0 0 1 1.64-.281m5.812 6.188 2.578 2.578 2.578-2.578a1.103 1.103 0 0 1 1.547 0c.469.469.469 1.172 0 1.594L24.047 18l2.578 2.578c.469.469.469 1.172 0 1.594a1.027 1.027 0 0 1-1.547 0L22.5 19.594l-2.578 2.578c-.469.469-1.172.469-1.594 0-.469-.422-.469-1.125 0-1.594L20.906 18l-2.578-2.578c-.469-.422-.469-1.125 0-1.594.422-.422 1.125-.422 1.594 0' />
    </g>
    <defs>
      <clipPath id='b7726d2472567865f5d5f30c9a836092__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeXmarkXlFillIcon);
export default ForwardRef;
