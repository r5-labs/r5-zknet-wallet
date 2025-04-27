import * as React from 'react';

declare module 'qrcode.react' {
  export interface QRCodeCanvasProps {
    value: string;
    size?: number;
  }

  export class QRCodeCanvas extends React.Component<QRCodeCanvasProps> {}
}
