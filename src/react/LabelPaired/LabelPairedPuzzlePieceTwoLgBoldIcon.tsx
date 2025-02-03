import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedPuzzlePieceTwoLgBoldIcon = (
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
      <path d='M17.383 18.86c.43.39.703.937.703 1.6 0 .665-.273 1.212-.703 1.602-.43.352-1.016.547-1.602.625-.078 0-.156 0-.195-.039v.391c0 .547-.313 1.016-.742 1.328a2.64 2.64 0 0 1-1.524.508h-1.64c-.782 0-1.172-.937-.664-1.484a2.7 2.7 0 0 0-.313-.743c-.156-.156-.39-.273-.742-.273a.97.97 0 0 0-.703.273 2.7 2.7 0 0 0-.313.743c.508.547.117 1.484-.664 1.484h-1.64c-.586 0-1.133-.195-1.524-.508A1.65 1.65 0 0 1 4.414 23v-5c0-.234 0-.39-.039-.547 0-.195 0-.312.04-.664v-1.25c0-.117 0-.273-.04-.43-.04 0-.117.04-.195 0-.586-.039-1.133-.195-1.563-.546-.469-.391-.703-.938-.703-1.602s.274-1.211.742-1.563c.43-.312.977-.43 1.524-.468h.195c.04-.157.04-.313.04-.43 0-.547.312-1.016.702-1.328.43-.313.977-.508 1.563-.508h1.093V8.47c.04-.586.235-1.172.625-1.602.391-.43.938-.703 1.602-.703s1.21.274 1.602.703c.39.43.585 1.016.625 1.602 0 .078 0 .117-.04.195h1.133c.586 0 1.133.195 1.563.508.39.312.703.781.703 1.328v7.734h.195c.586.04 1.172.235 1.602.625m-10.82 4.804h1.21v-.234c.04-.547.235-1.133.586-1.563.391-.43.938-.703 1.602-.703s1.21.273 1.601.703.586 1.016.626 1.602c.039.078 0 .117 0 .195h1.172c.312 0 .585-.117.78-.234.157-.157.235-.274.235-.39v-.9c0-.78.938-1.132 1.484-.663.313-.04.547-.157.704-.313.195-.156.312-.39.312-.703 0-.352-.117-.547-.312-.703-.157-.156-.391-.274-.704-.313-.546.47-1.484.078-1.484-.703v-1.367H11.68c-.782 0-1.172-.937-.664-1.484a2 2 0 0 0-.313-.703c-.195-.196-.39-.313-.742-.313-.313 0-.547.117-.703.313-.156.156-.235.39-.313.703.508.547.117 1.484-.664 1.484H5.586V23c0 .156.039.273.234.43.196.156.43.234.742.234m-.977-7.5h2.187v-.195c.04-.586.235-1.172.586-1.602.391-.43.938-.703 1.602-.703s1.21.274 1.601.703c.391.43.586 1.016.626 1.602.039.078 0 .117 0 .195h2.226V10.5c0-.117-.078-.234-.273-.39q-.295-.235-.82-.235H11.68c-.782 0-1.133-.937-.664-1.484a1.43 1.43 0 0 0-.313-.743.97.97 0 0 0-.703-.273.97.97 0 0 0-.703.273c-.156.196-.274.43-.313.743.47.547.079 1.484-.703 1.484H6.68c-.352 0-.664.078-.86.234-.156.157-.234.274-.234.391v.04c0 .077 0 .35-.04.624 0 .117-.038.274-.077.43-.04.117-.117.351-.313.508-.195.117-.39.156-.586.156a3 3 0 0 1-.312-.117c-.04 0-.04-.04-.04-.04-.429.04-.702.157-.859.274-.156.117-.273.273-.273.586s.117.508.273.664c.196.156.47.273.86.313 0-.04 0-.04.039-.04a3 3 0 0 1 .312-.117c.196 0 .39.04.586.156.196.157.274.391.313.508.039.157.078.313.078.43.039.273.039.508.039.625z' />
    </g>
    <defs>
      <clipPath id='ba652d9eb8af352f2e0ebd8ec766a2fb__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedPuzzlePieceTwoLgBoldIcon);
export default ForwardRef;
