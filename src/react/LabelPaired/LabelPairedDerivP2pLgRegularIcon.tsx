import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedDerivP2pLgRegularIcon = (
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
      <path d='M7.5 12.688c-.234 0-.508.039-.82.039-.274.039-.586.078-.86.117v5.547h1.25v-1.875h.43c.82 0 1.484-.157 1.914-.47.469-.273.703-.78.703-1.444 0-.665-.234-1.172-.664-1.446-.469-.312-1.094-.469-1.953-.469m.078 1.093c.195 0 .352 0 .508.04.156.038.273.077.39.117.118.078.196.156.235.273.078.078.078.234.078.39 0 .313-.078.547-.312.665-.235.117-.547.156-.977.156h-.43V13.82c.078 0 .157-.039.235-.039zm6.445.469c0-.234-.039-.469-.117-.664a1.5 1.5 0 0 0-.351-.508 2 2 0 0 0-.586-.312 2.7 2.7 0 0 0-.86-.118 2.3 2.3 0 0 0-1.015.235 2.3 2.3 0 0 0-.82.547l.585.82c.04-.04.118-.078.196-.117a.7.7 0 0 1 .273-.195c.078-.079.195-.118.352-.157.117-.078.234-.078.39-.078.196 0 .39.04.508.117.156.117.195.274.195.508 0 .117 0 .235-.078.352-.039.078-.117.195-.195.312l-.312.313-.352.351c-.156.156-.352.313-.508.469a7 7 0 0 0-.469.547c-.117.195-.234.39-.312.586a2.3 2.3 0 0 0-.117.742v.391h3.75v-1.016h-2.422c.039-.04.078-.117.117-.195.078-.078.156-.157.234-.274.118-.078.196-.195.274-.273l.273-.274.469-.468c.195-.157.313-.313.469-.508.117-.156.234-.352.312-.547q.117-.292.117-.586m2.5-1.562h.04c-.235 0-.508.039-.82.039-.313.039-.626.078-.9.117v5.547h1.29v-1.875h.39c.82 0 1.485-.157 1.954-.47.43-.273.664-.78.664-1.444 0-.665-.235-1.172-.664-1.446-.47-.312-1.094-.469-1.954-.469m.118 1.093c.156 0 .351 0 .468.04.157.038.313.077.391.117.117.078.195.156.234.273.078.078.118.234.118.39 0 .313-.118.547-.352.665-.195.117-.547.156-.977.156h-.39V13.82c.039 0 .117-.039.195-.039zM18.75 6.75H6.25a2.49 2.49 0 0 0-2.5 2.5v12.5c0 1.406 1.094 2.5 2.5 2.5h12.5c1.367 0 2.5-1.094 2.5-2.5V9.25c0-1.367-1.133-2.5-2.5-2.5M6.25 5.5h12.5c2.07 0 3.75 1.68 3.75 3.75v12.5c0 2.07-1.68 3.75-3.75 3.75H6.25c-2.07 0-3.75-1.68-3.75-3.75V9.25c0-2.07 1.68-3.75 3.75-3.75' />
    </g>
    <defs>
      <clipPath id='2262da9428ab5edd023af8d5a12fbeaa__a'>
        <path d='M0 0h25v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedDerivP2pLgRegularIcon);
export default ForwardRef;
