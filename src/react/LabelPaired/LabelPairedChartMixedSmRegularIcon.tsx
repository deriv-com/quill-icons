import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartMixedSmRegularIcon = (
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
      <path d='M13.863 4.79a.407.407 0 0 1-.027.6L9.023 9.767a.43.43 0 0 1-.601 0L5.195 6.512.684 9.793a.41.41 0 0 1-.602-.082c-.164-.191-.11-.465.082-.629l4.813-3.5c.164-.11.41-.082.574.055L8.75 8.836l4.512-4.074a.407.407 0 0 1 .601.027M2.188 15.562v-1.75a.47.47 0 0 0-.438-.438.45.45 0 0 0-.437.438v1.75c0 .246.19.437.437.437a.45.45 0 0 0 .438-.437M1.75 12.5c.71 0 1.313.602 1.313 1.313v1.75c0 .738-.602 1.312-1.313 1.312a1.296 1.296 0 0 1-1.312-1.312v-1.75c0-.711.574-1.313 1.312-1.313m3.938-1.312a.47.47 0 0 0-.438-.438.45.45 0 0 0-.437.438v4.374c0 .247.19.438.437.438a.45.45 0 0 0 .438-.437zm-1.75 0c0-.711.574-1.313 1.312-1.313.71 0 1.313.602 1.313 1.313v4.374c0 .739-.602 1.313-1.313 1.313a1.296 1.296 0 0 1-1.312-1.312zm5.25 4.374v-2.624a.47.47 0 0 0-.438-.438.45.45 0 0 0-.437.438v2.624c0 .247.19.438.437.438a.45.45 0 0 0 .438-.437m-.438-3.937c.71 0 1.313.602 1.313 1.313v2.624c0 .739-.602 1.313-1.313 1.313a1.296 1.296 0 0 1-1.312-1.312v-2.626c0-.71.574-1.312 1.312-1.312m3.938-.437a.47.47 0 0 0-.438-.438.45.45 0 0 0-.437.438v4.374c0 .247.19.438.437.438a.45.45 0 0 0 .438-.437zm-1.75 0c0-.711.574-1.313 1.312-1.313.71 0 1.313.602 1.313 1.313v4.374c0 .739-.602 1.313-1.313 1.313a1.296 1.296 0 0 1-1.312-1.312z' />
    </g>
    <defs>
      <clipPath id='9cfd4d065a570822ed0f0dc6a40f28ac__a'>
        <path d='M0 0h14v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartMixedSmRegularIcon);
export default ForwardRef;
