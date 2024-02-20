export abstract class TestRepository {
  abstract create(name: string): Promise<void>
}
