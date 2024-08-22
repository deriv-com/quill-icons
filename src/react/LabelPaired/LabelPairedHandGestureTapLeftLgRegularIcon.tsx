import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureTapLeftLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={30}
    viewBox='0 0 25 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.102 6.75c-.196 0-.352.195-.352.39v16.758a.35.35 0 0 0 .352.352c.195 0 .39-.156.39-.352V7.141a.42.42 0 0 0-.39-.391M5 13.625c0-1.367 1.133-2.5 2.5-2.5s2.5 1.133 2.5 2.5c0 .469-.117.86-.312 1.21l.742 1.524c.117-.117.273-.273.468-.351a1.59 1.59 0 0 1 1.563.156c.117-.078.234-.156.351-.195a1.59 1.59 0 0 1 1.563.156l.078-.078c.04 0 .078-.04.117-.04.742-.39 1.72-.038 2.07.743l1.016 2.11c.625 1.367.04 3.007-1.328 3.632l-2.969 1.445c-.546.235-1.093.352-1.68.313h-.273c-1.25-.04-2.422-.82-2.969-1.992l-.195-.469a1.79 1.79 0 0 1 .04-1.719l.312-.586c.039-.117.078-.195.117-.273l-1.445-3.086A2.477 2.477 0 0 1 5 13.625m1.602 1.172h.039c-.352-.664-.04-1.524.625-1.836.664-.313 1.523 0 1.836.664l.117.273v-.273c0-.937-.781-1.719-1.719-1.719-.977 0-1.758.781-1.758 1.719 0 .742.469 1.406 1.094 1.64zm3.75 6.015c.078.196-.04.43-.196.508-.195.117-.43.04-.508-.195l-.507-1.055-.196.39a1.16 1.16 0 0 0 0 1.017l.196.43a2.8 2.8 0 0 0 2.304 1.6l.235-.038c.468.039.898-.04 1.328-.235l3.008-1.406c.976-.469 1.367-1.64.937-2.617l-1.015-2.11c-.196-.39-.665-.546-1.055-.39-.078.039-.156.117-.235.195-.078.04-.195.117-.312.117-.078 0-.195-.078-.274-.156a.78.78 0 0 0-.937-.195c-.117.078-.234.156-.312.273-.079.117-.196.196-.313.196a.5.5 0 0 1-.352-.157.75.75 0 0 0-.937-.273.82.82 0 0 0-.43.625c-.039.156-.156.273-.351.312-.157.04-.313-.039-.39-.195l-1.642-3.515c-.156-.274-.507-.391-.78-.274-.313.156-.43.508-.274.781z' />
    </g>
    <defs>
      <clipPath id='b6542db90ea9b386badc1b768ce6b11d__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureTapLeftLgRegularIcon);
export default ForwardRef;
