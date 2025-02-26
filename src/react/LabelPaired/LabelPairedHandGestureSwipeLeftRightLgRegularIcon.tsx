import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedHandGestureSwipeLeftRightLgRegularIcon = (
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
      <path d='M12.46 9.523c.743 0 1.368.625 1.368 1.368v3.047q.292-.118.586-.118c.586 0 1.094.352 1.367.82.117-.038.274-.038.39-.038.587 0 1.095.351 1.368.78h.195c.86 0 1.563.704 1.563 1.563v2.344a2.74 2.74 0 0 1-2.735 2.734h-3.32c-.586 0-1.133-.117-1.64-.43l-.235-.077a3.54 3.54 0 0 1-1.836-3.125v-.47c0-.624.274-1.171.781-1.562l.547-.39c.079-.078.157-.117.235-.196v-4.882c0-.743.625-1.368 1.367-1.368m-.585 1.368v7.03a.42.42 0 0 1-.39.392.42.42 0 0 1-.391-.391V16.75l-.313.234c-.273.235-.469.547-.469.938v.469c0 1.015.547 1.953 1.446 2.422l.195.117c.39.195.82.312 1.29.312h3.32c1.093 0 1.953-.86 1.953-1.953v-2.344a.783.783 0 0 0-.782-.78c-.078 0-.195 0-.273.077-.117 0-.234 0-.313-.039-.117-.039-.195-.156-.195-.234a.83.83 0 0 0-.781-.586.66.66 0 0 0-.39.117.46.46 0 0 1-.391.04c-.118-.08-.196-.196-.196-.313a.8.8 0 0 0-.78-.625c-.274 0-.509.156-.665.351-.078.156-.273.195-.43.156a.375.375 0 0 1-.273-.351V10.89a.6.6 0 0 0-.586-.586.575.575 0 0 0-.586.586m7.188 2.539 2.382-2.383a.38.38 0 0 0 0-.547l-2.383-2.383a.47.47 0 0 0-.546 0c-.157.156-.118.39 0 .547l1.757 1.758h-4.57a.35.35 0 0 0-.351.351c0 .196.156.391.351.391h4.57l-1.757 1.719a.47.47 0 0 0 0 .547c.156.156.39.156.547 0m-12.5 0L4.18 11.047a.47.47 0 0 1 0-.547l2.383-2.383a.38.38 0 0 1 .546 0 .38.38 0 0 1 0 .547l-1.757 1.719h4.57a.42.42 0 0 1 .39.39.42.42 0 0 1-.39.391h-4.57l1.757 1.719a.38.38 0 0 1 0 .547.38.38 0 0 1-.546 0' />
    </g>
    <defs>
      <clipPath id='8ee41f5e3c8df1d38981d770540ed6d2__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedHandGestureSwipeLeftRightLgRegularIcon);
export default ForwardRef;
