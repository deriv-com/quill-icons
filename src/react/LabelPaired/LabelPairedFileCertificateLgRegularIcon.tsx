import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCertificateLgRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M18.75 23V13h-4.375a1.85 1.85 0 0 1-1.875-1.875V6.75h-5c-.703 0-1.25.586-1.25 1.25v2.5c-.352 0-.703.04-1.016.156-.078.04-.195.117-.234.117v.04V8c0-1.367 1.094-2.5 2.5-2.5h6.094c.469 0 .976.234 1.328.586l4.492 4.492c.352.352.586.86.586 1.328V23c0 1.406-1.133 2.5-2.5 2.5H8.633a1.6 1.6 0 0 0 .117-.625v-.625h8.75c.664 0 1.25-.547 1.25-1.25m-.04-11.25c-.038-.078-.077-.195-.155-.273l-4.532-4.532c-.078-.078-.195-.117-.273-.156v4.336c0 .352.273.625.625.625zm-8.983 5v.04s0 .077.156.39c.234.586.039 1.289-.469 1.68-.273.195-.312.273-.312.273 0 .039-.04.117-.079.43a1.41 1.41 0 0 1-1.25 1.25c-.156 0-.234.039-.273.039v4.023c0 .234-.156.469-.352.586a.7.7 0 0 1-.625-.04L5 24.407l-1.562 1.016c-.157.117-.43.117-.626.039a.69.69 0 0 1-.312-.586v-4.023c-.078 0-.156-.04-.312-.04a1.49 1.49 0 0 1-1.25-1.25c-.04-.351-.04-.39-.079-.43 0 0-.039-.077-.312-.273a1.465 1.465 0 0 1-.469-1.68c.156-.312.156-.39.156-.429 0 0 0-.078-.156-.39a1.465 1.465 0 0 1 .469-1.68c.273-.196.312-.274.312-.274 0-.039.04-.117.079-.43.117-.664.585-1.171 1.25-1.25.351-.039.39-.078.43-.078 0 0 .077-.039.273-.312a1.465 1.465 0 0 1 1.68-.469c.312.156.39.156.429.156 0 0 .078 0 .39-.156a1.465 1.465 0 0 1 1.68.469c.235.273.274.312.313.312 0 0 .078.04.39.079a1.41 1.41 0 0 1 1.25 1.25c.04.312.079.39.079.43 0 0 .039.077.312.273.508.39.703 1.093.469 1.68-.117.312-.156.39-.156.39M3.75 23.742l.898-.625a.67.67 0 0 1 .665 0l.937.625V21.75c-.312.04-.586.04-.86-.078-.312-.156-.39-.156-.39-.156-.04 0-.117 0-.43.156-.273.117-.547.117-.82.078zM1.484 16.75c0 .352-.117.625-.234.898-.04.079 0 .157.078.235.234.195.469.351.625.625.156.273.195.586.234.898 0 .078.079.157.157.157.312.039.625.078.898.234.274.156.469.39.625.625.078.078.156.117.235.078.273-.117.546-.234.898-.234.313 0 .586.117.86.234.077.04.156 0 .234-.078.195-.235.351-.469.625-.625.273-.156.586-.195.898-.235a.17.17 0 0 0 .156-.156c.04-.312.079-.625.235-.898.156-.274.39-.469.664-.625.039-.078.078-.156.039-.235-.117-.273-.234-.546-.234-.898 0-.312.117-.586.234-.86.039-.078 0-.156-.04-.234-.273-.195-.507-.351-.663-.625-.156-.273-.195-.586-.235-.898a.17.17 0 0 0-.156-.156c-.312-.04-.625-.079-.898-.235-.274-.156-.43-.39-.625-.664-.078-.039-.157-.078-.235-.039-.273.117-.546.234-.859.234-.352 0-.625-.117-.898-.234-.079-.039-.157 0-.235.04-.195.273-.351.507-.625.663-.273.156-.586.195-.898.235a.17.17 0 0 0-.156.156c-.04.312-.079.625-.235.898-.156.274-.39.43-.625.625-.078.078-.117.156-.078.235.117.273.234.547.234.859' />
    </g>
    <defs>
      <clipPath id='10a78c41c0e2ef13f2f086194c496a9c__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCertificateLgRegularIcon);
export default ForwardRef;
