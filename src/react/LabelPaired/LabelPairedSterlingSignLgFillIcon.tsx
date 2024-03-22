import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedSterlingSignLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={30}
    viewBox='0 0 13 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.625 11.79v2.46H9c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H4.625v1.758a6.2 6.2 0 0 1-.898 3.203l-.04.039H11.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-10c-.469 0-.898-.234-1.094-.625a1.2 1.2 0 0 1 0-1.25l1.172-1.953c.352-.586.547-1.25.547-1.914V16.75H1.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h.625v-2.46c0-2.774 2.227-5.04 5-5.04.547 0 1.055.117 1.602.273l3.164 1.055a1.25 1.25 0 0 1 .78 1.602c-.233.625-.937.976-1.562.78L7.906 9.407c-.234-.078-.508-.156-.781-.156-1.406 0-2.5 1.133-2.5 2.54' />
    </g>
    <defs>
      <clipPath id='1f700bc50b881ab59b7d0c6af9460e4c__a'>
        <path d='M0 0h13v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedSterlingSignLgFillIcon);
export default ForwardRef;
