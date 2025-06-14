import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleEnvelopeXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30M6 15v.469L11.578 18c.14.047.281.094.422.094s.281-.047.375-.094L18 15.469V15c0-.797-.703-1.5-1.5-1.5h-9c-.844 0-1.5.703-1.5 1.5m6.984 4.36a2.3 2.3 0 0 1-.984.234c-.375 0-.703-.094-1.031-.235L6 17.11V21c0 .844.656 1.5 1.5 1.5h9c.797 0 1.5-.656 1.5-1.5v-3.89z' />
    </g>
    <defs>
      <clipPath id='9f9313dc47cf1bdfe9f6e966c543faef__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleEnvelopeXlFillIcon);
export default ForwardRef;
