import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBadgeCheckSmFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={22}
    viewBox='0 0 14 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7 3.75c.984 0 1.86.574 2.297 1.422a2.6 2.6 0 0 1 2.652.629 2.6 2.6 0 0 1 .63 2.652C13.425 8.891 14 9.766 14 10.75a2.61 2.61 0 0 1-1.422 2.324c.3.903.082 1.914-.629 2.625-.71.711-1.75.93-2.652.656A2.58 2.58 0 0 1 7 17.75a2.59 2.59 0 0 1-2.324-1.395A2.62 2.62 0 0 1 2.05 15.7a2.62 2.62 0 0 1-.656-2.625A2.59 2.59 0 0 1 0 10.75c0-.984.547-1.86 1.395-2.297a2.67 2.67 0 0 1 .656-2.652c.71-.711 1.722-.93 2.625-.63A2.61 2.61 0 0 1 7 3.75m3.09 5.715a.644.644 0 0 0 0-.902c-.274-.274-.684-.274-.93 0l-3.035 3.035-1.285-1.286c-.274-.273-.684-.273-.93 0a.6.6 0 0 0 0 .903l1.75 1.75c.246.273.656.273.93 0z' />
    </g>
    <defs>
      <clipPath id='18f640674db276714d5eaf4ecabd7c46__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBadgeCheckSmFillIcon);
export default ForwardRef;
