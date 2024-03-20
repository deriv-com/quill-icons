import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedAppleCaptionIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={9}
    height={18}
    viewBox='0 0 9 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.453 9.805c0 .047-.07 1.43 1.453 2.156-.281.867-1.265 2.789-2.414 2.789-.656 0-1.031-.422-1.781-.422-.774 0-1.195.422-1.781.422-1.125.047-2.203-2.062-2.508-2.93a5.6 5.6 0 0 1-.328-1.898c0-2.086 1.383-3.094 2.695-3.117.633 0 1.43.445 1.781.445.328 0 1.242-.54 2.086-.469.867.07 1.524.399 1.969 1.032-.773.492-1.172 1.125-1.172 1.992M6.141 5.96c-.47.539-1.032.844-1.641.797-.047-.633.188-1.219.61-1.688.374-.422 1.03-.773 1.593-.82 0 .258.07.96-.562 1.71' />
    </g>
    <defs>
      <clipPath id='cb5179d4614f5792cd9fefd82fb5cdc9__a'>
        <path d='M0 0h9v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedAppleCaptionIcon);
export default ForwardRef;
