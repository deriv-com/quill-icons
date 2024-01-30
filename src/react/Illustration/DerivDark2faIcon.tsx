import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivDark2faIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#323738'
      stroke='#242828'
      strokeWidth={0.5}
      d='M16 1.25H8A1.75 1.75 0 0 0 6.25 3v18c0 .966.784 1.75 1.75 1.75h8A1.75 1.75 0 0 0 17.75 21V3A1.75 1.75 0 0 0 16 1.25Z'
    />
    <path
      fill='#FF444F'
      fillRule='evenodd'
      d='m8.25 15.675.398.134-.288.437.376.254.264-.4.264.4.377-.254-.288-.437.397-.134-.143-.434-.38.128V15h-.453v.37l-.381-.13zm2 0 .398.134-.288.437.376.254.264-.4.264.4.377-.254-.289-.437.398-.134-.143-.434-.38.128V15h-.453v.37l-.381-.13zm2.398.134-.398-.134.143-.434.38.128V15h.453v.37l.381-.13.143.435-.398.134.288.437-.376.254-.264-.4-.264.4-.377-.254zm1.602-.134.398.134-.288.437.376.254.264-.4.264.4.377-.254-.289-.437.398-.134-.143-.434-.38.128V15h-.453v.37l-.381-.13z'
      clipRule='evenodd'
    />
    <path
      fill='#6E6E6E'
      d='M13.5 9h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1'
    />
    <path stroke='#6E6E6E' d='M10.5 9.5V8a1.5 1.5 0 0 1 3 0v1.5' />
    <path fill='#242828' d='M13.75 21.5h-3.5a.25.25 0 1 0 0 .5h3.5a.25.25 0 1 0 0-.5' />
  </svg>
);
const ForwardRef = forwardRef(DerivDark2faIcon);
export default ForwardRef;
