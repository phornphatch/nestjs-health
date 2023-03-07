# Nestjs Health

A module used for exposing healthcheck endpoint for NestJS application.

## Usage 

- Install this library by running

```
yarn add @findingzumo/nestjs-health
```

- Import `HealthModule` into your `AppModule`

```typescript
import { HealthModule } from '@findingzumo/nestjs-health';

@Module({
  imports: [HealthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

- Start your application and verify the health by running

```
curl localhost:3000/api/health
```
