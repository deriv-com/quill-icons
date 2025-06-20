import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPercentXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={36}
    viewBox='0 0 18 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m17.297 11.297-15.047 15a1.027 1.027 0 0 1-1.547 0c-.469-.422-.469-1.125 0-1.594l15-14.953c.422-.469 1.125-.469 1.594 0a1.103 1.103 0 0 1 0 1.547M5.25 12c0 .844-.469 1.547-1.125 1.969-.703.422-1.594.422-2.25 0C1.172 13.547.75 12.844.75 12c0-.797.422-1.5 1.125-1.922.656-.422 1.547-.422 2.25 0C4.781 10.5 5.25 11.203 5.25 12m12 12c0 .844-.469 1.547-1.125 1.969-.703.422-1.594.422-2.25 0-.703-.422-1.125-1.125-1.125-1.969 0-.797.422-1.5 1.125-1.922.656-.422 1.547-.422 2.25 0 .656.422 1.125 1.125 1.125 1.922' />
    </g>
    <defs>
      <clipPath id='27403835adc602532c2f74547a77109c__a'>
        <path d='M0 0h18v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPercentXlBoldIcon);
export default ForwardRef;
