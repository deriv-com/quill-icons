import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileShieldSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={22}
    viewBox='0 0 16 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.875 16.875h.082c.219.246.465.465.738.684a1.75 1.75 0 0 1-.82.218h-7c-.984 0-1.75-.793-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75h4.266c.328 0 .683.164.93.41l3.144 3.145c.246.246.41.601.41.93V9.41l-.875.356V9H6.688a1.296 1.296 0 0 1-1.313-1.312V4.624h-3.5A.88.88 0 0 0 1 5.5V16c0 .492.383.875.875.875zm.848-8.75c-.028-.055-.055-.137-.11-.191L6.441 4.762c-.054-.055-.136-.082-.191-.11v3.036c0 .246.191.437.438.437zm-.848 3.883c.027 1.449.602 3.527 2.625 4.648v-5.715zm6.125 0-2.625-1.067v5.715c1.996-1.12 2.57-3.199 2.598-4.648zM12.184 9.93l3.28 1.312c.247.11.411.356.411.602 0 1.75-.71 4.62-3.691 5.879a.84.84 0 0 1-.52 0C8.684 16.465 8 13.593 8 11.843c0-.245.164-.491.41-.6l3.281-1.313a.68.68 0 0 1 .465 0z' />
    </g>
    <defs>
      <clipPath id='eb042a1ea3356ac1f30d776038e6675c__a'>
        <path d='M0 0h16v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldSmRegularIcon);
export default ForwardRef;
