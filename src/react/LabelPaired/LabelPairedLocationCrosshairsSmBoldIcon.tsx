import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLocationCrosshairsSmBoldIcon = (
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
      <path d='M7 3.75c.355 0 .656.3.656.656v1.149a5.28 5.28 0 0 1 4.54 4.539h1.148c.355 0 .656.3.656.656 0 .383-.3.656-.656.656h-1.149c-.3 2.38-2.187 4.266-4.539 4.567v1.12c0 .384-.3.657-.656.657a.63.63 0 0 1-.656-.656v-1.121a5.28 5.28 0 0 1-4.567-4.567H.657A.63.63 0 0 1 0 10.75c0-.355.273-.656.656-.656h1.121c.301-2.352 2.188-4.239 4.567-4.54V4.407c0-.355.273-.656.656-.656m-3.937 7c0 1.422.738 2.707 1.968 3.418 1.203.71 2.707.71 3.938 0a3.97 3.97 0 0 0 1.969-3.418c0-1.395-.766-2.68-1.97-3.39a3.9 3.9 0 0 0-3.937 0 3.9 3.9 0 0 0-1.968 3.39m5.25 0c0-.465-.274-.875-.657-1.121-.41-.246-.93-.246-1.312 0-.41.246-.657.656-.657 1.121 0 .492.247.902.657 1.148.383.247.902.247 1.312 0 .383-.246.657-.656.657-1.148m-3.938 0c0-.93.492-1.777 1.313-2.27a2.65 2.65 0 0 1 2.625 0c.792.493 1.312 1.34 1.312 2.27 0 .957-.52 1.805-1.312 2.297a2.65 2.65 0 0 1-2.626 0 2.65 2.65 0 0 1-1.312-2.297' />
    </g>
    <defs>
      <clipPath id='283a52767de1e9b15c1fa4e5c3e267b8__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLocationCrosshairsSmBoldIcon);
export default ForwardRef;
