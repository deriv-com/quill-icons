import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLockPatternSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M2.438 5.5c0-.71.574-1.312 1.312-1.312.547 0 1.04.382 1.23.875h2.762c.192-.493.684-.875 1.258-.875.547 0 1.04.382 1.23.875h2.762c.192-.493.684-.875 1.258-.875.71 0 1.313.601 1.313 1.312 0 .738-.602 1.313-1.313 1.313-.219 0-.41-.028-.574-.11l-3.5 3.5c.082.164.136.356.136.547 0 .738-.601 1.313-1.312 1.313-.219 0-.41-.028-.574-.11l-3.5 3.5c.027.027.027.082.054.11h2.762c.192-.493.684-.876 1.258-.876.547 0 1.04.383 1.23.876h2.762c.192-.493.684-.876 1.258-.876.71 0 1.313.602 1.313 1.313 0 .738-.602 1.313-1.313 1.313a1.33 1.33 0 0 1-1.258-.875H10.23c-.19.519-.683.875-1.23.875a1.33 1.33 0 0 1-1.258-.875H4.98c-.19.519-.683.875-1.257.875-.711 0-1.313-.575-1.313-1.313 0-.71.602-1.312 1.313-1.312.218 0 .41.054.574.136l3.5-3.5a1.3 1.3 0 0 1-.137-.574c0-.71.602-1.312 1.313-1.312.218 0 .41.054.574.136l3.5-3.5c-.027-.027-.027-.082-.055-.136H10.23c-.19.519-.683.875-1.23.875a1.33 1.33 0 0 1-1.258-.875H4.98c-.19.519-.683.875-1.23.875A1.296 1.296 0 0 1 2.438 5.5m0 5.25c0 .492.246.902.656 1.148.383.247.902.247 1.312 0 .383-.246.657-.656.657-1.148 0-.465-.274-.875-.657-1.121-.41-.246-.93-.246-1.312 0-.41.246-.656.656-.656 1.121m10.5 0c0 .492.246.902.656 1.148.383.247.902.247 1.312 0 .383-.246.656-.656.656-1.148 0-.465-.273-.875-.656-1.121-.41-.246-.93-.246-1.312 0-.41.246-.656.656-.656 1.121' />
    </g>
    <defs>
      <clipPath id='aa5229e7a076c0af2831d0ffb395c015__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLockPatternSmRegularIcon);
export default ForwardRef;
