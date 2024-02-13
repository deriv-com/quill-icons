import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPlaceholderMdRegularIcon = (
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
      <path d='M2.75 5h.75q.47.031.5.5-.03.47-.5.5h-.75q-.75.031-1.25.5-.469.5-.5 1.25v.75q-.03.47-.5.5-.469-.03-.5-.5v-.75q.03-1.156.813-1.937.78-.781 1.937-.813M.5 10q.47.031.5.5v3q-.03.47-.5.5-.469-.03-.5-.5v-3q.031-.469.5-.5m13 0q.47.031.5.5v3q-.03.47-.5.5-.469-.03-.5-.5v-3q.031-.469.5-.5m0-1q-.469-.03-.5-.5v-.75q-.03-.75-.5-1.25-.5-.469-1.25-.5h-.75q-.469-.03-.5-.5.031-.469.5-.5h.75q1.156.03 1.938.813.78.78.812 1.937v.75q-.03.47-.5.5m.5 6.5v.75q-.031 1.156-.812 1.938-.781.78-1.938.812h-.75q-.469-.03-.5-.5.031-.469.5-.5h.75q.75-.03 1.25-.5.47-.5.5-1.25v-.75q.031-.469.5-.5.47.031.5.5m-13 0v.75q.031.75.5 1.25.5.47 1.25.5h.75q.47.031.5.5-.03.47-.5.5h-.75q-1.156-.031-1.937-.812Q.03 17.406 0 16.25v-.75q.031-.469.5-.5.47.031.5.5M5.5 19q-.469-.03-.5-.5.031-.469.5-.5h3q.47.031.5.5-.03.47-.5.5zM5 5.5q.031-.469.5-.5h3q.47.031.5.5-.03.47-.5.5h-3q-.469-.03-.5-.5' />
    </g>
    <defs>
      <clipPath id='ddd2b4b92f9ebc007dd34ddcf4673257__a'>
        <path d='M0 0h14v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPlaceholderMdRegularIcon);
export default ForwardRef;
