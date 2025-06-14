import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsColumnSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={13}
    height={22}
    viewBox='0 0 13 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.688 5.5a.45.45 0 0 0-.438.438v4.375c0 .246.191.437.438.437h2.625a.45.45 0 0 0 .437-.437V5.937a.47.47 0 0 0-.437-.437zm-1.313.438c0-.711.574-1.313 1.313-1.313h2.625c.71 0 1.312.602 1.312 1.313v4.375c0 .738-.602 1.312-1.312 1.312H1.688a1.296 1.296 0 0 1-1.313-1.312zm8.313 4.812a.45.45 0 0 0-.438.438v4.374c0 .247.191.438.438.438h2.624a.45.45 0 0 0 .438-.437v-4.376a.47.47 0 0 0-.437-.437zm-1.313.438c0-.711.574-1.313 1.313-1.313h2.624c.711 0 1.313.602 1.313 1.313v4.374c0 .739-.602 1.313-1.312 1.313H8.687a1.296 1.296 0 0 1-1.312-1.312zm-3.062 2.187H1.688a.45.45 0 0 0-.438.438v1.75c0 .246.191.437.438.437h2.625a.45.45 0 0 0 .437-.437v-1.75a.47.47 0 0 0-.437-.438M1.688 12.5h2.625c.71 0 1.312.602 1.312 1.313v1.75c0 .738-.602 1.312-1.312 1.312H1.688a1.296 1.296 0 0 1-1.313-1.312v-1.75c0-.711.574-1.313 1.313-1.313m7-7a.45.45 0 0 0-.438.438v1.75c0 .246.191.437.438.437h2.624a.45.45 0 0 0 .438-.437v-1.75a.47.47 0 0 0-.437-.438zm-1.313.438c0-.711.574-1.313 1.313-1.313h2.624c.711 0 1.313.602 1.313 1.313v1.75c0 .738-.602 1.312-1.312 1.312H8.687a1.296 1.296 0 0 1-1.312-1.312z' />
    </g>
    <defs>
      <clipPath id='248ca42922d5d9ce755ea234593c3d41__a'>
        <path d='M0 0h13v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsColumnSmRegularIcon);
export default ForwardRef;
