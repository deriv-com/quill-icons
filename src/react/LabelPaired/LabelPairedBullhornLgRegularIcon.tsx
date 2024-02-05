import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBullhornLgRegularIcon = (
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
      <path d='M16.25 7.219q0-.195-.195-.274-.195-.078-.352.078L14.766 8a11.9 11.9 0 0 1-6.016 3.438v6.914q3.516.78 6.016 3.398l.937.977q.156.156.352.078t.195-.274zM7.5 18.117v-6.484q-.351.039-.664.039l-1.172.078H2.5q-.547 0-.898.352-.352.35-.352.898v3.75q0 .547.352.898.35.352.898.352h3.165l1.132.078q.351 0 .703.04m7.305-11.953q.82-.742 1.718-.39.9.351.977 1.445V22.53q-.078 1.094-.977 1.446-.897.351-1.718-.391l-.938-.977Q11.25 19.875 7.5 19.367v3.945q-.039.938-.625 1.563-.625.585-1.562.625h-.625q-.937-.039-1.563-.625-.586-.625-.625-1.562V19.25q-1.055-.039-1.758-.742Q.04 17.804 0 16.75V13q.039-1.055.742-1.758T2.5 10.5h3.125l1.133-.078a11 11 0 0 0 3.867-.938 10.7 10.7 0 0 0 3.242-2.343zM3.75 19.25v4.063q.078.858.938.937h.625q.859-.079.937-.937v-4.024l-.625-.039zM19.375 13q.585.039.625.625v2.5q-.039.585-.625.625-.585-.039-.625-.625v-2.5q.039-.585.625-.625' />
    </g>
    <defs>
      <clipPath id='5a8bab779b57f4d7873e695f65baac12__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBullhornLgRegularIcon);
export default ForwardRef;
